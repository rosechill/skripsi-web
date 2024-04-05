<!-- API -->

<!-- api additional -->
Route::get('/8633445279-partnerApi', [apiController::class, 'apiPartner']);
Route::get('/8633445279-testimoniApi', [apiController::class, 'apiTestimoni']); error
Route::get('/8633445279-galleryApi', [apiController::class, 'apiGallery']);
Route::get('/8633445279-staffApi', [apiController::class, 'apiStaff']);

<!-- api-berita -->
Route::get('/8633445279-beritaApi', [apiController::class, 'apiBerita']);
Route::get('/8633445279-beritaApi/{caption}', [apiController::class, 'apiBeritaCaption']); erroor
Route::get('/8633445279-beritaApibyId/{id}', [apiController::class, 'apiBeritaById']);

<!-- api-destinasi -->
Route::get('/8633445279-destinasiApi', [apiController::class, 'apiDestinasi']);
Route::get('/8633445279-destinasiApi/{kategori}', [apiController::class, 'apiDestinasiKategori']);
Route::get('/8633445279-destinasiApibyId/{id}', [apiController::class, 'apiDestinasibyId']);

<!-- api-tour -->
Route::get('/8633445279-tourApi', [apiController::class, 'apiTourPackage']);
Route::get('/8633445279-tourApi/{total_day}', [apiController::class, 'apiTourPackageByDay']);
Route::get('/8633445279-tourApibyId/{id}', [apiController::class, 'detailTourById']);


<!-- link untuk gallery img -->
https://www.travelxism.com/destinasi-image/detail/{path_photo}

<!-- Link untuk services img -->
https://www.travelxism.com/assets/img/pelatihan-img.jpg
https://www.travelxism.com/assets/img/konsultan-img.jpg
https://www.travelxism.com/assets/img/kajian-img.jpg
https://www.travelxism.com/assets/img/medpro-img.jpg

<!-- Link untuk tour img -->
https://www.travelxism.com/storage/tourpackageimg/1701662228_cover_phutuk setumbu 2.jpg
pr untuk img itenaray beda 