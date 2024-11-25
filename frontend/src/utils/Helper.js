export const validEmail = (email) =>{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}

export const getInitials = (name) =>{
    if (!name) return ""
    
    let words = name.split(" ")
    let shortName = ""
    for (let i=0; i<Math.min(words.length,2);i++){
        shortName += words[i][0]
    }

    return shortName.toUpperCase()
}