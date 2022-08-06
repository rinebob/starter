import {AuCourse, Course} from '../common/interfaces';
// from material.angular.io/components/sort/examples
export function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

// converts an Angular University Firebase Essentials AuCourse object
// to a StarterApp StCourse object
export function convertAuCourseToStCourse(course: AuCourse): Course {

    const newCourse: Course = {
        id: course.id,
        displayName: course.description,
        description: course.longDescription,
        iconUrl: course.iconUrl,
        lessonsCount: course.lessonsCount,
        // categories: course.categories,
        seqNo: course.seqNo,
        url: course.url,
    }

    return newCourse;
}

export function convertAuCourseListToStCourseList(courses: AuCourse[]) {
    let newCourses: Course[] = [];

    for (const course of Object.values(courses)) {
        const newCourse = convertAuCourseToStCourse(course);
        newCourses.push(newCourse);
    }
    
    return newCourses;
}