<html>
    <body>
        <?php
            // PHP CODE GOES HERE

            $str = "Hello, world!";
            $num = 5;
            $float = 0.5;

            ------------------------------

            $mobile = array("oneplus" , "realme" , "oppo");
            var_dump ($mobile [2]);
            //echo (var_dump ($mobile [2]));

            //CONSONANTS

            define ("mobile", "Oneplus , Redmi and Vivo");
            echo mobile;

            //Conditional Statements 
            /*
                -> If
                -> If Else
                -> Else If (elif)
                -> Switch
            */

            $var = 1;
            if  ($var > 5) {
                echo $var;
            }

            else {
                echo "Condition not met";
            }

            // IF ELSE ELSE IF
            $var = 9;
            if ($var %2 == 0 && $var %3 == 0) {
                echo "Divisible by both.";
                }

                elseif ($var %2 == 0) {
                    echo "Divisible by 2";
                }

                elseif ($var %3 == 0) {
                    echo "Divisible by 3";
                }

                else {
                    echo "Divisible by NONE (Neither 2 nor 3)";
                }

            // Switch Case
            $pokemon = 9;
                switch ($pokemon) {
                    case 1: 
                        echo "You are on Level 1";
                        break;

                    case 2:
                        echo "You are on Level 2";
                        break;
                    
                    case 3:
                        echo "You are on Level 3";
                        break;

                    default:
                        echo "Invalid Pokemon.";
                }
                
            //LOOPS
            /*
                -> WHILE LOOP
                -> DO LOOP
                -> FOR LOOP
            */
            
            // While loop
             $var = -5;
             while ($var <= 10) {
                echo "The number is: $var <br>";
                $var++;
            }

            // Do Loop
            $var = 0;
            do {
                echo "The number is: $var <br>";
                $var++;
            } while ($var <= 15)

            // FOR LOOP
            for ($var = 0; $var <= 10; $var++) {
                echo "The number is: $var <br>";
            }            
        ?>

    </body>
</html>
