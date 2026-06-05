let voicesLoaded = false;

speechSynthesis.onvoiceschanged =
() => {

    voicesLoaded = true;

};

let voiceEnabled = true;

function getFemaleVoice() {

    const voices =
    speechSynthesis.getVoices();

    let femaleVoice = null;

    femaleVoice =
    voices.find(v =>
        v.name.includes("Aria")
    );

    if(!femaleVoice){

        femaleVoice =
        voices.find(v =>
            v.name.includes("Jenny")
        );

    }

    if(!femaleVoice){

        femaleVoice =
        voices.find(v =>
            v.name.includes("Sonia")
        );

    }

    if(!femaleVoice){

        femaleVoice =
        voices.find(v =>
            v.name.includes("Zira")
        );

    }

    return femaleVoice;
}

function speak(text){

    if(!voiceEnabled) return;

    if(!voicesLoaded){

        setTimeout(() => {

            speak(text);

        },500);

        return;
    }

    speechSynthesis.cancel();

    const speech =
    new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";

    speech.rate = 0.95;

    speech.pitch = 1.15;

    speech.volume = 1;

    speech.voice =
    getFemaleVoice();

    speechSynthesis.speak(speech);

}

document.addEventListener(
"DOMContentLoaded",
() => {

    const voiceBtn =
    document.getElementById("voiceToggle");

    const pauseBtn =
    document.getElementById("pauseVoice");

    const stopBtn =
    document.getElementById("stopVoice");

    if(voiceBtn){

        voiceBtn.addEventListener(
        "click",
        () => {

            voiceEnabled =
            !voiceEnabled;

            voiceBtn.innerHTML =
            voiceEnabled ? "🔊" : "🔇";

            if(!voiceEnabled){

                speechSynthesis.cancel();

            }

        });

    }

    if(pauseBtn){

        pauseBtn.addEventListener(
        "click",
        () => {

            if(
                speechSynthesis.speaking &&
                !speechSynthesis.paused
            ){

                speechSynthesis.pause();

                pauseBtn.innerHTML = "▶";

            }

            else if(
                speechSynthesis.paused
            ){

                speechSynthesis.resume();

                pauseBtn.innerHTML = "⏸";

            }

        });

    }

    if(stopBtn){

        stopBtn.addEventListener(
        "click",
        () => {

            speechSynthesis.cancel();

            pauseBtn.innerHTML = "⏸";

        });

    }

});