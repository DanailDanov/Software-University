function fishTank(input) {

        let lenghtInCentimeters = Number(input[0]);
        let widthInCentimeters = Number(input[1]);
        let heightInCentimeters = Number(input[2]);
        let percentVolume = Number(input[3]);
        
        let volumeAquarium = lenghtInCentimeters * widthInCentimeters * heightInCentimeters;
        let volumeInletres = volumeAquarium / 1000;
        let neccesseryLitres = volumeInletres - (volumeInletres * (percentVolume / 100));

        console.log(neccesseryLitres);
    }

fishTank(["85 ","75 ","47 ","17 "]);    




