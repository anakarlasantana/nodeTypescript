
/**
 * name - string
 * duration - number
 * educator - string
 */
interface Course {
name: string;
duration?: number; 
educator: string;
}

class CreateCourseService {
    execute({name, duration = 8, educator}: Course) { //Desestruturação a partir a interfaxe
        console.log(name, duration, educator)
    }
}
export default new CreateCourseService();