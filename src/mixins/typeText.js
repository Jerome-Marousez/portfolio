export default {

    data() {
        return {
            typedText: '',
        }
    },

    methods: {
        typeText(inputText, counter = 0){
            if(!counter){
                inputText = Array.from(inputText)
                inputText.splice(Math.floor(inputText.length / 4),
                    0,
                    String.fromCharCode(Math.floor(Math.random() * 26) + 97),
                    String.fromCharCode(Math.floor(Math.random() * 26) + 97),
                    false,
                    false
                )
            }
            if(counter < inputText.length) {
                setTimeout(() => {
                    if (!inputText[counter]) {
                        this.typedText = this.typedText.slice(0, -1)
                    } else {
                        this.typedText += inputText[counter]
                    }
                    this.typeText(inputText, counter + 1)
                }, Math.floor(Math.random() * 200) + 50)
            }

        },


    },


}