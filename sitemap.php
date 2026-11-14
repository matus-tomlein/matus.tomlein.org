<?php
function external_url($url) {
  return 'https://'.$_SERVER['SERVER_NAME'].$url;
}
header('Content-Type:text/plain; charset=UTF-8');
?>
<?= external_url('/') ?>

<?= external_url('/cv') ?>

<?= external_url('/portfolio') ?>

<?= external_url('/writing') ?>

<?= external_url('/research') ?>

<?php
$blogs = json_decode(file_get_contents('./api/blogs.json'), true);
?>
<?php foreach ($blogs['blogs'] as $blog): ?>
<?= external_url('/blogs/'.$blog['id']) ?>

<?php endforeach ?>
<?php
$publications = json_decode(file_get_contents('./api/publications.json'), true);
?>
<?php foreach ($publications['publications'] as $publication): ?>
<?= external_url('/publications/'.$publication['id']) ?>

<?php endforeach ?>
