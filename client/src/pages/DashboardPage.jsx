import React from 'react';
import Sidebar from '../components/Sidebar';
import GpaTrendChart from '../components/GPAChart';

const DashboardPage = () => {
  return (
    <>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        <div
          style={{
            flex: 1,
            padding: '30px 40px 40px',
            marginLeft: '250px',
            minHeight: 'calc(100vh - 70px)',
            overflowY: 'auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              gap: '20px',
            }}
          >
            <div style={{ flex: 1, minWidth: '300px' }}>
              <h2 style={{ marginBottom: '20px' }}>Hi, Selamawit 👋</h2>
              <div
                style={{
                  display: 'flex',
                  gap: '20px',
                  flexWrap: 'wrap',
                }}
              >
                <StatCard label="Cumulative GPA" value="3.8" />
                <StatCard label="Current Semester GPA" value="3.9" />
                <StatCard label="Total Semesters" value="6" />
                <StatCard label="Total Credits" value="102" />
                <StatCard label="Total Courses" value="24" />
              </div>
            </div>
            <div style={{ maxWidth: '450px', width: '100%' }}>
              <GpaTrendChart />
            </div>
          </div>

          <div style={{ marginTop: '40px' }}>
            <h3>Quick Links</h3>
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              <li>
                <a href="/add-course" className="dashboard-link">
  ➕ Add Course
</a>

              </li>
              <li>
  <a href="/view-semesters" className="dashboard-link">
    📚 View Semesters
  </a>
</li>
<li>
  <a href="/degree-progress" className="dashboard-link">
    🎓 Track Degree
  </a>
</li>
<li>
  <a href="/required-gpa" className="dashboard-link">
    🎯 GPA Goals
  </a>
</li>

            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

const StatCard = ({ label, value }) => (
  <div
    style={{
      background: 'linear-gradient(135deg, #081c25, #1c394a)',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
      minWidth: '160px',
      flex: '1 1 160px',
      color: 'white',
      textAlign: 'center',
      fontWeight: '600',
      userSelect: 'none',
    }}
  >
    <h4 style={{ margin: 0, fontSize: '16px', opacity: 0.9 }}>{label}</h4>
    <p style={{ margin: '10px 0 0', fontSize: '28px' }}>{value}</p>
  </div>
);

export default DashboardPage;
