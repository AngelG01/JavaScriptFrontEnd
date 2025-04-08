function farmManagamentSystem(commandsList){
    let numberOfFarmers = parseInt(commandsList.shift());
    let farmers = [];

    for (let i=0; i < numberOfFarmers; i++){
        let [name, location, skills] = commandsList.shift().split(' ')
        
        farmers.push({name, location, skills});
    }

    for (let element of commandsList){
        if (element === 'End'){
            break;
        }

        if (element.includes('Execute')){
            let [command, name, area, task] = element.split(' / ')

            if (findFarmer(name).location === area && findFarmer(name).skills.includes(task)){
                console.log(`${name} has executed the task: ${task}!`)
            }else{
                console.log(`${name} cannot execute the task: ${task}.`)
            }
        }else if (element.includes('Change Area')){
            let [command, name, area] = element.split(' / ')

            findFarmer(name).location = area;

            console.log(`${name} has changed their work area to: ${findFarmer(name).location}`);
        
        }else if (element.includes('Learn Task')){
            let [command, name, newSkill] = element.split(' / ');

            if (findFarmer(name).skills.includes(newSkill)){
                console.log(`${name} already knows how to perform ${newSkill}.`)
            }else{
                findFarmer(name).skills += ',' + newSkill
                console.log(`${name} has learned a new task: ${newSkill}.`)
            }
        }

    }

    function findFarmer(name){
        for (let farmer of farmers){
            if (farmer.name === name){
                return farmer
            }
        }
    }

    for (let farmer of farmers){
        let sortedSkills = farmer.skills.split(',').sort()

        console.log(`Farmer: ${farmer.name}, Area: ${farmer.location}, Tasks: ${sortedSkills.join(', ')}`)
    }
}



farmManagamentSystem([

    "2",
    
    "John garden watering,weeding",
    
    "Mary barn feeding,cleaning",
    
    "Execute / John / garden / watering",
    
    "Execute / Mary / garden / feeding",
    
    "Learn Task / John / planting",
    
    "Execute / John / garden / planting",
    
    "Change Area / Mary / garden",
    
    "Execute / Mary / garden / cleaning",
    
    "End"
    
    ])