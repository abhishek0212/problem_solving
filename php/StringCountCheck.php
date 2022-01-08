<?php
// encode ("aaaabccaadeeee")
// [[4,a] [1,b] [2,c] [2,a] [1,d][4,e]]
function encode($string) {
    $string = str_split($string);
    $output = [];
    $cnt = 1;
    for ($i = 1; $i<=count($string); $i++) {
        if($string[$i-1] == $string[$i]) {
            $cnt++;
        }
        else {
             $output[] = [$cnt, $string[$i-1]];
             $cnt = 1;
        }
    }
    print_r(json_encode($output));
}

encode("aaaabccaaaadeeeee");