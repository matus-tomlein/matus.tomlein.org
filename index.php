<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Matúš Tomlein</title>
    <meta name="description" content="Matúš Tomlein – Software developer and researcher.">
    <meta name="author" content="Matúš Tomlein">
    <meta name="keywords" content="personal,blog">
    <meta name="robots" content="index, follow">
    <link rel="stylesheet" href="/styles/tufte.css" />
    <link rel="stylesheet" href="/styles/latex.css" />
    <link rel="stylesheet" href="/styles/flexboxgrid.min.css" />
    <link rel="stylesheet" href="/styles/index.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script defer src="/scripts/font-awesome.js"></script>
</head>
<body>

    <div id="app-container"></div>

    <? $version = file_get_contents('./version.txt') ?>
    <script src="/scripts/app.js?version=<?= $version ?>" type="text/javascript"></script>

</body>
</html>
