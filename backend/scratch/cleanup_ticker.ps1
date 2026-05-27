$p = "src\components\Section1.jsx"
$c = Get-Content $p
$newContent = @()
# Keeping lines up to 3837 (indices 0 to 3836)
$newContent += $c[0..3836]
# Skipping 3838 to 4802 (indices 3837 to 4801)
# Keeping 4803 to 4893 (indices 4802 to 4892)
$newContent += $c[4802..4892]
# Skipping 4894 to 5616 (indices 4893 to 5615)
# Keeping 5617 to 5707 (indices 5616 to 5706)
$newContent += $c[5616..5706]
# Skipping 5708 to 7404 (indices 5707 to 7403)
# Keeping rest
$newContent += $c[7404..($c.Length-1)]
$newContent | Set-Content $p
