Write-Host "Converting HTML to JS variables..."

function Convert-HtmlToJs {
    param(
        [string]$HtmlPath,
        [string]$JsPath,
        [string]$VariableName
    )
    
    if (Test-Path $HtmlPath) {
        $html = Get-Content $HtmlPath -Raw -Encoding UTF8
        # Escape for JS string
        $escaped = $html.Replace("\", "\\").Replace("'", "\'").Replace("`r", "\r").Replace("`n", "\n")
        $jsContent = "$VariableName = '$escaped';"
        
        Set-Content -Path $JsPath -Value $jsContent -Encoding UTF8
        Write-Host "Converted $HtmlPath -> $JsPath"
    } else {
        Write-Host "Error: $HtmlPath not found" -ForegroundColor Red
    }
}

Convert-HtmlToJs -HtmlPath "forms\form-a.html" -JsPath "forms\form-a.js" -VariableName "window.formA_HTML"
Convert-HtmlToJs -HtmlPath "forms\form-b.html" -JsPath "forms\form-b.js" -VariableName "window.formB_HTML"

Write-Host "Done!"
