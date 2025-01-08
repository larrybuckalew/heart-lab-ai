# Detailed PostgreSQL Installation Information
# Ensure execution policy allows running scripts
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process -Force

# Function to get PostgreSQL details
function Get-PostgreSQLDetails {
    $basePath = "C:\Program Files\PostgreSQL"
    
    Write-Host "PostgreSQL Installation Details" -ForegroundColor Cyan
    Write-Host "===============================" -ForegroundColor Cyan

    # Find PostgreSQL version
    $versions = Get-ChildItem $basePath | Where-Object { $_.PSIsContainer }

    if ($versions.Count -eq 0) {
        Write-Host "No PostgreSQL versions found." -ForegroundColor Red
        return
    }

    foreach ($version in $versions) {
        $versionPath = $version.FullName
        $binPath = Join-Path $versionPath "bin"

        Write-Host "`nPostgreSQL Version: $($version.Name)" -ForegroundColor Green
        
        # Check executables
        $executables = @('psql.exe', 'createdb.exe', 'pg_config.exe')
        foreach ($exe in $executables) {
            $exePath = Join-Path $binPath $exe
            if (Test-Path $exePath) {
                Write-Host "  $exe found" -ForegroundColor Green
            } else {
                Write-Host "  $exe not found" -ForegroundColor Red
            }
        }
    }

  # Detailed PostgreSQL Installation Information
# Ensure execution policy allows running scripts
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process -Force

# Function to get PostgreSQL details
function Get-PostgreSQLDetails {
    $basePath = "C:\Program Files\PostgreSQL"
    
    Write-Host "PostgreSQL Installation Details" -ForegroundColor Cyan
    Write-Host "===============================" -ForegroundColor Cyan

    # Find PostgreSQL version
    $versions = Get-ChildItem $basePath | Where-Object { $_.PSIsContainer }

    if ($versions.Count -eq 0) {
        Write-Host "No PostgreSQL versions found." -ForegroundColor Red
        return
    }

    foreach ($version in $versions) {
        $versionPath = $version.FullName
        $binPath = Join-Path $versionPath "bin"

        Write-Host "`nPostgreSQL Version: $($version.Name)" -ForegroundColor Green
        
        # Check executables
        $executables = @('psql.exe', 'createdb.exe', 'pg_config.exe')
        foreach ($exe in $executables) {
            $exePath = Join-Path $binPath $exe
            if (Test-Path $exePath) {
                Write-Host "  $exe found" -ForegroundColor Green
            } else {
                Write-Host "  $exe not found" -ForegroundColor Red
            }
        }
    }

    # Database connection test
    try {
        $password = Read-Host "Enter PostgreSQL postgres user password (or press Enter to skip)"
        if ($password) {
            $env:PGPASSWORD = $password
            
            # Detailed connection test with error capturing
            $processInfo = New-Object System.Diagnostics.ProcessStartInfo
            $processInfo.FileName = "C:\Program Files\PostgreSQL\17\bin\psql.exe"
            $processInfo.RedirectStandardError = $true
            $processInfo.RedirectStandardOutput = $true
            $processInfo.UseShellExecute = $false
            $processInfo.Arguments = "-U", "postgres", "-c", "SELECT version();"
            
            $process = New-Object System.Diagnostics.Process
            $process.StartInfo = $processInfo
            $process.Start() | Out-Null
            $stdout = $process.StandardOutput.ReadToEnd()
            $stderr = $process.StandardError.ReadToEnd()
            $process.WaitForExit()

            if ($process.ExitCode -eq 0) {
                Write-Host "Database connection successful" -ForegroundColor Green
                Write-Host "PostgreSQL Version Output:" -ForegroundColor Green
                Write-Host $stdout
            } else {
                Write-Host "Database connection failed" -ForegroundColor Red
                Write-Host "Error Output:" -ForegroundColor Red
                Write-Host $stderr
            }
        }
    }
    catch {
        Write-Host "Connection test error: $_" -ForegroundColor Red
    }
    finally {
        Remove-Item env:PGPASSWORD -ErrorAction SilentlyContinue
    }

    # Additional PostgreSQL service check
    try {
        $pgService = Get-Service -Name "postgresql-x64-17" -ErrorAction SilentlyContinue
        if ($pgService) {
            Write-Host "`nPostgreSQL Service Status:" -ForegroundColor Cyan
            Write-Host "  Name: $($pgService.Name)" -ForegroundColor Green
            Write-Host "  Status: $($pgService.Status)" -ForegroundColor Green
        } else {
            Write-Host "`nNo PostgreSQL service found" -ForegroundColor Yellow
        }
    }
    catch {
        Write-Host "Error checking PostgreSQL service: $_" -ForegroundColor Red
    }
}

# Run the function
Get-PostgreSQLDetails

# Pause
Read-Host "Press Enter to exit"