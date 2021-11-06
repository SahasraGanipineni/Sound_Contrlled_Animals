function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/C2eCRIrdq/model.json', modelReady);
}

function  modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error, results)
{
    if(error) {
        console.error(error);
    } else{
        console.log(results);
    
        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;

        img = document.getElementById('image');

        if(results[0].label == "Dog Barking")
        {
            img.src = 'dog.png';
        }
        else if(results[0].label == "Cat Meowing")
        {
            img.src = 'cat.png';
        }
        else if(results[0].label == "Lion Roaring")
        {
            img.src = 'lion.png';
        }
        else if(results[0].label == "Elephant Sound")
        {
            img.src = 'elephant.png';
        }
        else
        {
            img.src = 'hearing.png';
        }
    }
}
