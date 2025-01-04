# PostgreSQL Connection Test Script

# Explicitly set execution policy
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process -Force

# Function to test PostgreSQL connection
function Test-PostgreSQLConnection {
    # PostgreSQL installation path
    $pgPath = "C:\Program Files\PostgreSQL\17\bin"
    
    # Validate PostgreSQL bin directory exists
    if (-not (Test-Path $pgPath)) {
        Write-Host "PostgreSQL bin directory not found!" -ForegroundColor Red
        return $false
    }

    # Full path to psql executable
    $psqlExe = Join-Path $pgPath "psql.exe"
    
    # Validate psql executable exists
    if (-not (Test-Path $psqlExe)) {
        Write-Host "psql.exe not found at $psqlExe" -ForegroundColor Red
        return $false
    }

    # Passwords to try
    $passwords = @(
        "HeartLabAi2025",  # User-provided password
        "",                # Empty password
        "postgres"         # Default postgres password
    )

    # Connection test
    foreach ($password in $passwords) {
        Write-Host "Attempting connection with password: '$password'" -ForegroundColor Yellow
        
        try {
            # Set password
            $env:PGPASSWORD = $password
            
            # Run connection test
            $result = & $psqlExe -U postgres -c "SELECT version();" 2>&1
            
            if ($LASTEXITCODE -eq 0) {
                Write-Host "Connection Successful!" -ForegroundColor Green
                Write-Host "PostgreSQL Version Output:" -ForegroundColor Cyan
                Write-Host $result
                return $true
            } else {
                Write-Host "Connection Failed" -ForegroundColor Red
                Write-Host "Error Output:" -ForegroundColor Red
                Write-Host $result
            }
        }
        catch {
            Write-Host "Connection Error: $_" -ForegroundColor Red
        }
        finally {
            # Clear password
            Remove-Item env:PGPASSWORD -ErrorAction SilentlyContinue
        }
    }

    Write-Host "All connection attempts failed." -ForegroundColor Red
    return $false
}

# Run the connection test
$connectionResult = Test-PostgreSQLConnection

# Pause to view results
Read-Host "Press Enter to exit"
