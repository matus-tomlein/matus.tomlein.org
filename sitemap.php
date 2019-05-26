<?
function external_url($url) {
  return 'https://'.$_SERVER['SERVER_NAME'].$url;
}
header('Content-Type:text/plain; charset=UTF-8');
?>
<?= external_url('/') ?>

<?= external_url('/cv') ?>

<?= external_url('/portfolio') ?>

<?= external_url('/') ?>

<?
$blogs = json_decode(file_get_contents('./api/blogs.json'), true);
?>
<? foreach ($blogs['blogs'] as $blog): ?>
<?= external_url('/blogs/'.$blog['id']) ?>

<? endforeach ?>
<?
$publications = json_decode(file_get_contents('./api/publications.json'), true);
?>
<? foreach ($publications['publications'] as $publication): ?>
<?= external_url('/publications/'.$publication['id']) ?>

<? endforeach ?>
