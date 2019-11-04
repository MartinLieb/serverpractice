users = [
    {
    id: "1",
    createdAt: "2019-09-25T04:23:44.868Z",
    name: "Maritza Rempel",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/kurtinc/128.jpg",
    content: "zero administration Investment Account Music"
    },
    {
    id: "2",
    createdAt: "2019-09-24T22:59:36.227Z",
    name: "Mr. Merl Donnelly",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/tweetubhai/128.jpg",
    content: "Sleek Steel Intelligent Concrete Fish"
    },
    {
    id: "3",
    createdAt: "2019-09-24T17:17:31.636Z",
    name: "Leslie Graham",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/stefanotirloni/128.jpg",
    content: "efficient withdrawal sensor"
    }];
    
    table = () => {
    let resultat = "<table id='t'>";
    for (let element of users) {
      resultat += "<tr>";
      resultat += "<td>" + element.id + "</td><td>" + element.name +"</td>" + "</td><td>" + element.content +"</td>";
      resultat += "</tr>";
    
    }
    resultat += "</table>"
    
    document.getElementById("users").innerHTML = resultat;
}