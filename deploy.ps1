$envPath = "./.env"

if (-not (Test-Path $envFile -PathType Leaf)) {
    Write-Error "Error: file not found at $envFile"
    exit 1
}

Get-Content ./.env | ForEach-Object {
    $line = $_.Trim()

    if ([string]::IsNullOrEmpty($line) -or $line.StartsWith('#')) { return }
 
    $separatorIndex = $line.IndexOf('=')
    if ($separatorIndex -eq -1) {
        Write-Warning "Skipping invalid line (no '='): $line"
        return
    }
 
    $key = $line.Substring(0, $separatorIndex).Trim()
    $value = $line.Substring($separatorIndex + 1).Trim()
 
    if ($value.StartsWith('"') -and $value.EndsWith('"')) {
        $value = $value.Substring(1, $value.Length - 2)
    } elseif ($value.StartsWith("'") -and $value.EndsWith("'")) {
        $value = $value.Substring(1, $value.Length - 2)
    }
 
    $env:$key = $value
}

$testConnection = Test-Connection $env:ADDRESS
$testConnection.WaitForExit()
if (testConnection.ExitCode -ne 0) {
    Write-Output "Connect to VPN and try again"
    Exit 1
}

$sshProcess = ssh $env:$HOST_NAME "$env:REMOTE_DIR/deploy.sh"
$sshProcess.WaitForExit()
if (sshProcess.ExitCode -ne 0) {
    Write-Output "Failed to deploy on remote"
    Exit 2
}

Write-Output "Site deployed on remote"
