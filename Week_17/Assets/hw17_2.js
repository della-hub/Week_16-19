function addComment() {
    let commentInput = document.getElementById('comment');
    
    let filteredComment = checkSpam(commentInput.value);
    
    printComment(filteredComment);
    commentInput.value = '';
}

function checkSpam(input) {
    const regex = /viagra|xxx|porno/ig;
    return input.replaceAll(regex, '***');
}

function printComment(comment) {
    let commentOutput = document.getElementById('resultsoutput');
    commentOutput.innerHTML = commentOutput.innerHTML + comment + "<br>";
}
