var twitterLink = 'https://twitter.com/FedeGRios';
var linkedinLink = 'https://www.linkedin.com/in/federico-rios-a9130033';
var githubLink = 'https://github.com/fedegrios';
var resumeLink = 'fede_rios_resume.pdf';

var btnTwitter = document.querySelector('.btn__twitter');
btnTwitter.onclick = function(){
    window.location.href = twitterLink;
}

var btnLinkedin = document.querySelector('.btn__linkedin');
btnLinkedin.onclick = function(){
    window.location.href = linkedinLink;
}

var btnGithub = document.querySelector('.btn__github');
btnGithub.onclick = function(){
    window.location.href = githubLink;
}

var btnGithub = document.querySelector('.btn__resume');
btnGithub.onclick = function(){
    window.location.href = resumeLink;
}