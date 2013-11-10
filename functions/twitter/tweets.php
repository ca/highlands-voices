<?php
session_start();

if( isset( $_GET['username'] ) AND $_GET['username'] != '' ):

    require_once('oauth/twitteroauth.php'); //Path to twitteroauth library
    
    $username = $_GET['username'];
    $limit = ( isset( $_GET['count'] ) AND $_GET['count'] != '' AND is_numeric( $_GET['count'] ) ) ? $_GET['count'] : 2;
    
    $consumerkey = "aXToI0by5jJcycaXQt3hQ"; // Twitter App - Consumer Key for OAuth
    $consumersecret = "mDoLHG0q3zNrdERrvPjuEghW952jSOovxjFt1nGhs0o"; // Twitter App - Consumer Secret for OAuth
    $accesstoken = "416077616-nVtO6HXQKi4XgeSjPAUvrtX2nzPVpg6wH6e6c4i5"; // Twitter App - Access Token for OAuth
    $accesstokensecret = "AcKiAQOQx0W5r8NN44YNPF3SDTr9wiD6oBqQxyDRY8"; // Twitter App - Access Token Secret for OAuth
    
    function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
      $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
      return $connection;
    }
    
    $interval = 600;
    
    $cache_file = dirname(__FILE__) . '/cache/' . $username . '_' . $limit;
    
	if (file_exists($cache_file)) {
		$last = filemtime($cache_file);
	} else { $last = false; }
    
	$now = time();
    
	if ( !$last || (( $now - $last ) > $interval) ) {
        
        $connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
        $twitter_feed = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=".$username."&count=".$limit);
        
		$cache_rss = serialize($twitter_feed);
        
		if (!empty($cache_rss)) {
			$cache_static = fopen($cache_file, 'wb');
			fwrite($cache_static, $cache_rss);
			fclose($cache_static);
		}
        
		$rss = @unserialize(file_get_contents($cache_file));
	} else {
        $rss = @unserialize(file_get_contents($cache_file));
	}
    
    echo json_encode($rss);

endif;

?>