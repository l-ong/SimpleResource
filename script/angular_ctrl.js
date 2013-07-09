function GalleryCtrl($scope,$resource) {

  var albums = $resource('https://graph.facebook.com/22092443056/albums');
  $scope.albums = albums.get();

}