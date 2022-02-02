<?php
header("Access-Control-Allow-Headers: *");
    // check if server local or not
  $server = $_SERVER['SERVER_NAME'];
    if($server === "localhost")
    {
        $server .= '/andriusAlimas';
    }

     $show = false; // just variable to check formating
     $showCities = false; // just variable to check if show country cities when need it
     $usePage = false;
     $data = 'data';
     $default = false;
   
    $executionStartTime = microtime(true);
    
    // receive api name, then we use in switch 
    if((isset($_REQUEST['api_name'])) && ($_REQUEST['api_name']!=null)){
        $api_name = $_REQUEST['api_name'];
    }else{
        $api_name = "no name";
    }

    $curl = curl_init();
    echo $server;
    switch($api_name){
       case 'countryBorders':
            $url = 'https://'.$server.'/json/countryBorders.geo.json';
            break;
       case 'countries':
            $url='https://api.opencagedata.com/geocode/v1/json?key=2d40209da4f34c91a11e862854bfe317&q='.$_REQUEST['q'];
            $data = 'results';
            break;
        case 'countries_cities-morePage':
              $usePage = true;    
        case 'countries_cities':   
              $showCities = true; 
        case 'countries_details':
            if($showCities){
                $url = 'https://countries-cities.p.rapidapi.com/location/country/'.$_REQUEST['isoa2'].'/city/list?population='.$_REQUEST['population'];
            }
            else{
                $url = 'https://countries-cities.p.rapidapi.com/location/country/'.$_REQUEST['isoa2'];
            }
            if($usePage){
                $url = 'https://countries-cities.p.rapidapi.com/location/country/'.$_REQUEST['isoa2'].'/city/list?page='.$_REQUEST['page'].'&per_page=100&population='.$_REQUEST['population'];
            }

            $header = [
                "x-rapidapi-host: countries-cities.p.rapidapi.com",
                "x-rapidapi-key: 9b655893f9mshb01f5c9d312d303p1a5424jsncf783eff3535"
            ];  

            finalizeRequest($curl,$url,$header);
          case 'geonames':
            $url = 'http://api.geonames.org/wikipediaSearchJSON?q='.$_REQUEST['q'].'&title='.$_REQUEST['q'].'&maxRows=5&username=andriusAlimas';
            break;
          case 'youtube':
            $url = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=About%20Country%20'.$_REQUEST['country'].'&access_token=AIzaSyCs9npKf9bzuxghfYq9cDkNEB6tENxljWM&key=AIzaSyCs9npKf9bzuxghfYq9cDkNEB6tENxljWM';
           break;
          case 'holiday':
            $url = 'https://calendarific.com/api/v2/holidays?&api_key=a3521b9dca8c30ad00fab540e45ba9c53caa7ffa&country='.$_REQUEST['iso2'].'&year='.$_REQUEST['year'];
            break;
            case 'open_weather_map':
                $header = [
                    "x-rapidapi-host: community-open-weather-map.p.rapidapi.com",
                    "x-rapidapi-key: 9b655893f9mshb01f5c9d312d303p1a5424jsncf783eff3535"
                ];

                $url = "https://community-open-weather-map.p.rapidapi.com/forecast?q=".$_REQUEST['city'];
                
                finalizeRequest($curl,$url,$header);  
                break;
            case 'covid_19':
                $header = [
                    "x-rapidapi-host: coronavirus-map.p.rapidapi.com",
                    "x-rapidapi-key: 9b655893f9mshb01f5c9d312d303p1a5424jsncf783eff3535"
                ];
                $url = "https://coronavirus-map.p.rapidapi.com/v1/spots/month?region=".$_REQUEST['country'];
                finalizeRequest($curl,$url,$header);  
        default:
        $default = true;
        $output['accessToken']= '04yVMx6BriAAM2GxEbC0LLWicl9TJ5qCrka3agfo47w2WkFC99LicZd5yBRpggu8'; // later on we need to encrypt this somehow
        break;    
    }
    
    if(!$default){
         curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
         curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
         curl_setopt($curl, CURLOPT_URL,$url);
         $result=curl_exec($curl);
         curl_close($curl);
         $decode = json_decode($result,true);  
    }else{
        $decode = json_decode($output['accessToken'],true);  
    }
 
    $output['status']['code'] = "200";
    $output['status']['name'] = "ok";
    $output['status']['description'] = "success";
    $output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";
    
 // because some decode is different we need to make sure its right format
 if($show == true){ 
    $output['data'] = $decode[$api_name];
}else{
    $output[$data] = $decode;   
}
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode($output);

function finalizeRequest($curl,$url,$header) {
    
    curl_setopt_array($curl, [ 
        CURLOPT_URL => $url ,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_HTTPHEADER => $header,
    ]);

    $response = curl_exec($curl);
    $err = curl_error($curl);
    
    curl_close($curl);
    
    if ($err) {
        echo "cURL Error #:" . $err;
    } else {
    $decode = json_decode($response,true);
    $output['data'] = $decode;   
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode($output);
        exit;
    }
}   
?>