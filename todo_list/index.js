/*
            Quand user écrit une tache dans le champ de texte et appuie sur boutton:
                - On récupére ce qu'a saisi l'user et on le stocke dans une variable;
                - On vérifie si le champ n'est pas vide, si il est vide:
                    - On envoie une pop up à l'user signalant de saisir quelque chose
                    - Si il n'est pas vide on l'affiche sur la page
                - On sauvegarde ensuite ces taches dans localStorage
                - On implémentera ensuite un systeme de supréssion de tache :
                    - Chaque tache aura un boutton permettant de supprimer la tache,
                    - Si on appuie dessus la tache sera plus visble coté client et de localStorage
        */

                    let taskContainer = document.getElementById('task-container');
                    let element = document.getElementById('task-input');
                    let arrayList = [];
            
                    let taskfromStorage = localStorage.getItem("tasks");
                    if (taskfromStorage) {
                        arrayList = JSON.parse(taskfromStorage);
                        arrayList.forEach((tasks) => {
                            taskCard(tasks);
                        }) 
                    }
                    
                    function addTask() {
                        if (element.value == '') {
                            alert("Veuillez saisir une tache !");
                        } else {
                            arrayList.push(element.value);
                            localStorage.setItem("tasks", JSON.stringify(arrayList));
                            let textFromStorage = localStorage.getItem("tasks");
                            let tasks = JSON.parse(textFromStorage);
            
                            taskCard(element.value);
                            element.value = '';
                        }
                    }
            
                    function deleteFunction() {
                        localStorage.removeItem("tasks");
                        arrayList = [];
                        taskContainer.innerHTML = "<h2> Mes tâches :</h2>";
                    }
            
                    function taskCard(taskText) {
                        let divElement = document.createElement("div");
                            let pElement = document.createElement("p");
                            pElement.innerText = taskText;
                            let buttonElement = document.createElement("button");
                            buttonElement.innerText = "Supprimer";
            
                            divElement.appendChild(pElement);
                            divElement.appendChild(buttonElement);
                            
                            buttonElement.addEventListener("click", () => {
                                let value = event.target.parentElement.querySelector("p").innerText;
                                arrayList = arrayList.filter((element) => value != element);
                                event.target.parentElement.remove();
                                localStorage.setItem("tasks", JSON.stringify(arrayList));
                            })
                            taskContainer.appendChild(divElement);
                    }