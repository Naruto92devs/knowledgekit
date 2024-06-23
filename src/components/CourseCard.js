const CourseCard = ({ course }) => {
    return (
      <div className="border rounded-lg shadow-lg p-4">
        <img src={course.img} alt={course.title} className="rounded-md mb-4" />
        <h3 className="text-lg font-semibold">{course.title}</h3>
        <p className="text-sm my-2">{course.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">{course.price}</span>
          <span className="text-sm line-through">{course.originalPrice}</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">{Array(Math.round(course.rating)).fill('⭐')}</span>
          <span className="ml-2 text-sm">({course.reviews})</span>
        </div>
      </div>
    );
  };
  
  export default CourseCard;