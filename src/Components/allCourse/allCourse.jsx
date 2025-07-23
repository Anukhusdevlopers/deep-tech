import React, { useState } from 'react';
import CourseCard from './CourseCard.jsx';
import courses from '../Assets/popularCourse';
import './allCourse.css';

const AllCoursesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;  // 3x3 grid

  const indexOfLast = currentPage * cardsPerPage;
  const indexOfFirst = indexOfLast - cardsPerPage;
  const currentCourses = courses.slice(indexOfFirst, indexOfLast);

  const paginate = (number) => setCurrentPage(number);

  const totalPages = Math.ceil(courses.length / cardsPerPage);

  return (
    <section className="all-courses">
      <h2>All Courses</h2>
      <div className="courses-grid">
        {currentCourses.map((item, index) => (
          <CourseCard key={index} {...item} />
        ))}
      </div>

      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default AllCoursesPage;