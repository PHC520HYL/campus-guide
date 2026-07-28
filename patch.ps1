$cssFile = 'C:\Users\32890\Desktop\校园\optimized-css.txt'
$htmlFile = 'C:\Users\32890\Desktop\校园\江西电力职业技术学院-校园指南.html'

$css = [System.IO.File]::ReadAllText($cssFile, [System.Text.Encoding]::UTF8)
$html = [System.IO.File]::ReadAllText($htmlFile, [System.Text.Encoding]::UTF8)

$styleOpen = '<style>'
$styleClose = '</style>'
$startIdx = $html.IndexOf($styleOpen)
$endIdx = $html.IndexOf($styleClose) + $styleClose.Length

$before = $html.Substring(0, $startIdx)
$after = $html.Substring($endIdx)

$result = $before + $css + $after
[System.IO.File]::WriteAllText($htmlFile, $result, [System.Text.Encoding]::UTF8)
Write-Output 'Done'
