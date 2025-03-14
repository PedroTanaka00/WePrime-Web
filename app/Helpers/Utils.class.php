<?php 

abstract class Utils 
{
    // retorna apenas os numeros de uma string
    public static function createLinkWhatsapp($number, $text = '')
    {
        $number = preg_replace('/[^0-9]/', '', $number);
        $text   = urlencode($text);

        if($text)
            return "https://wa.me/55{$number}?text={$text}";
        else
            return "https://wa.me/55{$number}";
    }

}
