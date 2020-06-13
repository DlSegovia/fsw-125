const express = require("express")
const app = express()


const movies =[
    {
        title:" Bad Boys for Life", 
        stars: "Will Smith, Martin Lawrence, Vanessa Hudgens", 
        Release: "Jan 17, 2020", 
        information: " Miami detectives Mike Lowrey and Marcus Burnett must face off against a mother-and-son pair of drug lords who wreak vengeful havoc on their city."}, 
         
        {title:" Jumanji: The Next Level",
        stars:" Dwayne Johnson, Kevin Hart, Jack Black, Karen Gillan, Nick Jonas, Alex Wolff, Morgan Turner, Madison Iseman", 
        Release: "Dec 13, 2019", 
        information:" In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game."}, 

        {title:" Sonic the Hedgehog", 
        stars: "Jim Carrey, Ben Schwartz, James Marsden, James Marsden", 
        Release: "Feb 14, 2020", 
        information:" After discovering a small, blue, fast hedgehog, a small-town police officer must help him defeat an evil genius who wants to do experiments on him."}, 

        {title:" Star Wars: Episode IX - The Rise of Skywalker", 
        stars:"  Daisy Ridley, John Boyega, Oscar Isaac", 
        Release: "Dec 20, 2019", 
        information:" The surviving members of the resistance face the First Order once again, and the legendary conflict between the Jedi and the Sith reaches its peak bringing the Skywalker saga to its end."},

        {title:" Dolittle", 
        stars:" Robert Downey, Jr., Emma Thompson, Rami Malek, John Cena, Kumail Nanjiani, Octavia Spencer, Tom Holland, Craig Robinson, Ralph Fiennes, Selena Gomez, Marion Cotillard", 
        Release: "Jan 17, 2020", 
        information:" A physician who can talk to animals embarks on an adventure to find a legendary island with a young apprentice and a crew of strange pets."}, 

        {title:" Extraction",
        stars: " Chris Hemsworth, Bryon Lerum, Ryder Lerum",
        Release: "April 24, 2020", 
        information:" Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he's enlisted to rescue the kidnapped son of an imprisoned international crime lord."}, 

        
        {title:" Just Mercy", 
        stars:" Michael B. Jordan, Jamie Foxx, Brie Larson", 
        subtitle:" Release Date: “Jan 10, 2020", 
        information:" World-renowned civil rights defense attorney Bryan Stevenson works to free a wrongly condemned death row prisoner."},

        {title:" The Gentlemen", 
        stars: "Hugh Grant, Charlie Hunnam, Colin Farrell, Henry Golding, Matthew McConaughey, Michelle Dockery", 
        subtitle:" Release Date: “Jan 24, 2020", 
        information:" An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him."}, 

        {title:" The Call of the Wild", 
        stars: "Harrison Ford, Terry Notary, Dan Stevens, Karen Gillan, Omar Sy, Colin Woodell, Bradley Whitford", 
        Release: "Feb 21, 2020", 
        information:" Buck is a big-hearted dog whose blissful domestic life is turned upside down when he is suddenly uprooted from his California home and transplanted to the exotic wilds of the Alaskan Yukon during the Gold Rush of the 1890s. As the newest rookie on a mail delivery dog sled team—and later its leader—Buck experiences the adventure of a lifetime, ultimately finding his true place in the world and becoming his own master."},

        {title:" Bloodshot", 
        stars:" Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, Guy Pearce", 
        Release: "Mar 13, 2020", 
        information:" Ray Garrison is a soldier recently killed in action and brought back to life as the superhero Bloodshot by the RST corporation. With an army of nanotechnology in his veins, he’s an unstoppable force –stronger than ever and able to heal instantly. But in controlling his body, the company has sway over his mind and memories, too. Now, Ray doesn’t know what’s real and what’s not — but he’s on a mission to find out."} 
]

const pet=[
    {
        pet1: "blue, green, parakeet, "
    },
    {
        pet2: "blue, gray, parakeet, "
    },
    {
        pet3: "chacolate brown, pitbull/lab, dog, "
    },
    {
        pet2: "black, chow chow, dog"
    }
]
app.get("/pet", (req, res) => {
    res.send(pet)
})

const color=[
    {
        color1: "dark blue, blue, light blub, "
    },
    {
        color2: "dark purple, purple, light purple"
    }
]
app.get("/color", (req, res) => {
    res.send(color)
})

app.get("/movies", (req, res) => {
    res.send(movies)
})
            
        // 1: Port  2: CB
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})
