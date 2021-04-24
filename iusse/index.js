
document.getElementById('issueInputForm').addEventListener('submit',saveIssue);
let totalIssue = document.getElementById('total-issue');
let deleteIssues = document.getElementById('delete-issue');

function saveIssue(e){
 let issueDesc =document.getElementById('issueDescription').value;
 let issueSeverity =document.getElementById('issueSeverity').value;
 let issueAssignedTo=document.getElementById('issueAssignedTo').value;
 let issueId = Math.floor(Math.random()*100000000) + '';
 let issuesStatus="Open";

 let issue={
    id:issueId,
    description:issueDesc,
    severity:issueSeverity,
    assignedTo:issueAssignedTo,
    status:issuesStatus
    }
     if(localStorage.getItem("is")==null){
        let issue1=[];
        issue1.push(issue);
        localStorage.setItem('is',JSON.stringify(issue1));
     }
 else{
     let issue2=JSON.parse(localStorage.getItem('is'));
     issue2.push(issue);
     localStorage.setItem('is',JSON.stringify(issue2));
  
  }
  //  console.log(issue2)
 document.getElementById('issueInputForm').reset();
 totalIssues();
 fetchIssues();
 e.preventDefault();
 //deleted();
 }

function deleted(){
    localStorage.removeItem('is')
}


function setStatusClose(id){
   let issue3=JSON.parse(localStorage.getItem('is'));
   for (let i = 0; i < issue3.length; i++) {
      if(issue3[i].id==id){
          issue3[i].status='Closed';
      }
       
   }
   localStorage.setItem('is',JSON.stringify(issue3)); 
   fetchIssues();
}

function deleteIssue(id){
    let issue4=JSON.parse(localStorage.getItem('is'));
   // console.log(issue4)
    for (let i = 0; i < issue4.length; i++) {
         if(issue4[i].id==id){
          issue4.splice(i,1);
                   }
   }
  localStorage.setItem('is',JSON.stringify(issue4)); 
  delC();
  fetchIssues();
}

function totalIssues(){
    let issue6=JSON.parse(localStorage.getItem('is'));
    let issuetotal=0;
     for (var i = 0; i < issue6.length; i++) {
      issuetotal=issuetotal+1;
     }
    totalIssue.innerHTML=issuetotal;
     localStorage.setItem('is',JSON.stringify(issue6)); 
}
totalIssues();

//  active when delete button will click 
let initial=0;
function delC(){
    let issue7=JSON.parse(localStorage.getItem('is'));
        let update=initial+1;
      deleteIssues.innerHTML=update;
      initial=update;
     localStorage.setItem('is',JSON.stringify(issue7)); 
}

function fetchIssues(){
    let  issue5 =JSON.parse(localStorage.getItem('is'));
    let issuesList=document.getElementById("issuesList");
    issuesList.innerHTML='';

    for(let i=0; i<issue5.length;i++){
        let id=issue5[i].id;
        let desc=issue5[i].description;
        let severity=issue5[i].severity;
        let assignedTo=issue5[i].assignedTo;
        let status=issue5[i].status;

      issuesList.innerHTML +='<div class="well">'+
    '<h6>Issue ID:'+id+'</h6>'+
    '<p><span class="label label-info">'+status+'</span></p>'+
    '<h3>'+desc+'</h3>'+
    '<p><span class="glyphicon glyphicon-time"><span>'+severity+'</p>'+
    '<p><span class="glyphicon glyphicon-user"><span>'+assignedTo+'</p>'+
    '<a href="#" onclick="setStatusClose(\''+id+'\')" class="btn btn-warning">Closed</a>'+
    '<a href="#" onclick="deleteIssue(\''+id+'\')" class="btn btn-danger">Delete</a>'+
    '</div> ';
                  
     }
    
}

// function clearStore(){
//     localStorage.clear();
// }