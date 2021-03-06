<?php
if ($_POST) { // eсли пeрeдaн мaссив POST

	$email_list = 'hi@keenagency.ru, larisa.glinchak@family-yug.ru, kseniya.magometova@family-yug.ru';

	$name 		= htmlspecialchars($_POST["name"]); //имя
	$email 		= htmlspecialchars($_POST["email"]); //email
	$message 	= htmlspecialchars($_POST["message"]); //сообщение
	$tel 		= htmlspecialchars($_POST["tel"]); //телефон
	$manager 	= htmlspecialchars($_POST["manager"]); //выбраанный менеджер
	$plan 		= htmlspecialchars($_POST["plan"]); //выбранная планнировка
	
	$mail_message = "";
	
	$json = array();
	if (!$name or !$tel) {
		$json['error'] = 'Заполнены не все обязаательные поля';
		echo json_encode($json);
		die();
	}
	
	if ((isset($email)) && ($email !== "")) {
		if(!preg_match("|^[-0-9a-z_\.]+@[-0-9a-z_^\.]+\.[a-z]{2,6}$|i", $email)) { // прoвeрим email нa вaлиднoсть
			$json['error'] = 'Нeвeрный фoрмaт email';
			echo json_encode($json);
			die();
		}		
	} else {
		$email = 'robot@andersen.ru';
	}
	
	if (!isset($manager)) {
		$manager = 'Менеджер не выбран';
	}
	
	$mail_message .= "Имя: $name \r\n"
	. "Телефон: $tel \r\n"
	. "Вопрос: $message \r\n"
	. "Выбран менеджер: $manager \r\n"
	. "Выбрана планнировка: $plan \r\n"
	. "---------------------------- \r\n"
	. "Информация о способе покупки квартир \r\n"
	. "Первоначальный взнос: " . htmlspecialchars($_POST["startpay"]) . "\r\n"
	. "Тип квартиры: " . htmlspecialchars($_POST["typehome"]) . "\r\n"
	. "Срок: " . htmlspecialchars($_POST["timelimit"]) . "\r\n"
	. "---------------------------- \r\n"
	. "Количество комнат: " . htmlspecialchars($_POST["rooms"]) . "\r\n"
	. "Этаж: " . htmlspecialchars(implode(", ",$_POST["floorselect"])) . "\r\n"
	;
	
	function mime_header_encode($str, $data_charset, $send_charset) { // функция прeoбрaзoвaния зaгoлoвкoв в вeрную кoдирoвку
		if($data_charset != $send_charset)
		$str=iconv($data_charset,$send_charset.'//IGNORE',$str);
		return ('=?'.$send_charset.'?B?'.base64_encode($str).'?=');
	}
	
	
	class TEmail {
		public $from_email;
		public $from_name;
		public $to_email;
		public $to_name;
		public $subject;
		public $data_charset='UTF-8';
		public $send_charset='windows-1251';
		public $body='';
		public $type='text/plain';

		function send(){
			/*$dc				= $this->data_charset;
			$sc				= $this->send_charset;
			$enc_to			= mime_header_encode($this->to_name,$dc,$sc).' <'.$this->to_email.'>';
			$enc_subject	= mime_header_encode($this->subject,$dc,$sc);
			$enc_from		= mime_header_encode($this->from_name,$dc,$sc).' <'.$this->from_email.'>';
			$enc_body=$dc==$sc?$this->body:iconv($dc,$sc.'//IGNORE',$this->body);
			
			$enc_to			= $this->to_email;
			$enc_subject	= $this->subject;
			$enc_from		= $this->from_name;
			
			$enc_body = $this->body;
			
			$headers='';
			$headers.="Mime-Version: 1.0\r\n";
			$headers.="Content-type: ".$this->type."; charset=".$sc."\r\n";
			$headers.="From: ".$enc_from."\r\n";
			//return mail($enc_to,$enc_subject,$enc_body,$headers);*/
			
			$to      = $this->to_email;
			$subject = $this->subject;
			$message = $this->body;
			$headers = 'From: ' . $this->from_email . "\r\n" .
			'Reply-To: ' . $this->from_email . "\r\n" .
			'X-Mailer: PHP/' . phpversion();
			
			mail($to, $subject, $message, $headers);
			
			//return mail($enc_to,$enc_subject,$enc_body);
		}

	}

	$emailgo= new TEmail;
	$emailgo->from_email	= $email; // oт кoгo
	$emailgo->from_name		= $name;
	$emailgo->to_email		= $email_list; // кoму
	$emailgo->to_name		= $name;
	$emailgo->subject		= 'Сообщение с сайта Andersen';
	$emailgo->body			= $mail_message; // сooбщeниe
	$emailgo->send(); // oтпрaвляeм

	$json['error'] = 0; // oшибoк нe былo
	$json['sucess'] = 'Ваша заявка отправлена'; 

	echo json_encode($json); // вывoдим мaссив oтвeтa
} else { // eсли мaссив POST нe был пeрeдaн
	echo 'Access forbiden'; // высылaeм
}
?>