package aula_inatel.pokemon;

import com.intuit.karate.junit5.Karate;

public class pkRunner {

    @Karate.Test
    Karate testPokemon() {
        return Karate.run("pokemon").relativeTo(getClass());
    }    

}
