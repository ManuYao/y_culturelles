<?php
/*  -FR-  Cette ligne permet d'autoriser toutes les origines à accéder à la ressource. 
        (n'importe quelle origine) est autorisé à faire des requêtes au YCulturelles PHP.
    
    -EN- This line allows you to authorize all origins to access the resource.
         (any origin) is authorized to make requests to YCulturelles PHP.
*/
header("Access-Control-Allow-Origin: *");

/*  -FR- Cette ligne spécifie le type de contenu que le serveur envoie en réponse.
     Dans ce cas, elle indique que le contenu est au format JSON (`application/json`) 
     et utilise l'encodage de caractères UTF-8 (`charset=UTF-8`).
    
    -EN- This line specifies the type of content that the server sends in response.
      In this case, it indicates that the content is in JSON format (`application/json`)
      and uses UTF-8 character encoding (`charset=UTF-8`).
*/
header("Content-Type: application/json; charset=UTF-8");

//requête à l'API OpenAgenda
$data = file_get_contents('https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?limit=100&refine=keywords_fr%3A%22concert%22&refine=keywords_fr%3A%22musique%22&refine=keywords_fr%3A%22gratuit%22&refine=keywords_fr%3A%22exposition%22&refine=keywords_fr%3A%22spectacle%22&refine=keywords_fr%3A%22th%C3%A9%C3%A2tre%22&refine=keywords_fr%3A%22culture%22&refine=keywords_fr%3A%22festival%22&refine=keywords_fr%3A%22visite%22&refine=keywords_fr%3A%22cin%C3%A9ma%22&refine=keywords_fr%3A%22conf%C3%A9rence%22&refine=keywords_fr%3A%22art%22&refine=keywords_fr%3A%22mus%C3%A9e%22&refine=keywords_fr%3A%22Th%C3%A9%C3%A2tre%22&refine=keywords_fr%3A%22Cin%C3%A9ma%22&refine=keywords_fr%3A%22film%22&refine=keywords_fr%3A%22loisirs%22&refine=updatedat%3A%222023%22'); 
$data = json_decode($data, true);

echo json_encode($data['results']);
?>
