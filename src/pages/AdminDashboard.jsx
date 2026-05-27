import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useContent } from '../context/ContentContext';

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const { content, updateContent } = useContent();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('pages');
  const [editingPage, setEditingPage] = useState(null);
  const [isAddingPage, setIsAddingPage] = useState(false);
  const [notification, setNotification] = useState('');
  const [pages, setPages] = useState([
    { name: 'Home Page', path: '/', date: '2 hours ago' },
    { name: 'Episodes', path: '/episodes', date: 'Yesterday' },
    { name: 'Careers', path: '/careers', date: '3 days ago' },
    { name: 'FAQ', path: '/faqs', date: '1 week ago' },
    { name: 'Privacy Policy', path: '/privacy-policy', date: 'Mar 12, 2024' }
  ]);
  const [newPageData, setNewPageData] = useState({ name: '', path: '' });

  // Protect the route
  if (!user || user.role !== 'admin') {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#000',
        color: '#fff',
        fontFamily: 'Inter, sans-serif'
      }}>
        <h1 style={{ color: '#ff4d4d', marginBottom: '20px' }}>Access Denied</h1>
        <p>You do not have permission to view this page.</p>
        <button 
          onClick={() => navigate('/admin-login')}
          style={{
            marginTop: '30px',
            padding: '12px 24px',
            backgroundColor: '#ff4d4d',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '600'
          }}
        >
          Go to Admin Login
        </button>
      </div>
    );
  }

  const sections = [
    { id: 'overview', title: 'Overview', icon: '📊' },
    { id: 'pages', title: 'Manage Pages', icon: '📄' },
    { id: 'episodes', title: 'Episodes', icon: '🎬' },
    { id: 'careers', title: 'Job Postings', icon: '💼' },
    { id: 'users', title: 'User Management', icon: '👥' },
    { id: 'settings', title: 'Settings', icon: '⚙️' }
  ];

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 3000);
  };

  const renderEditor = () => (
    <div style={{
      backgroundColor: '#0a0a0a',
      borderRadius: '16px',
      border: '1px solid #1a1a1a',
      padding: '30px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
        <h3>Editing: {editingPage.name}</h3>
        <button onClick={() => setEditingPage(null)} style={{ color: '#888', background: 'none', border: 'none', cursor: 'pointer' }}>✕ Close</button>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: '#666' }}>Page Title</label>
        <input 
          type="text" 
          defaultValue={editingPage.name} 
          style={{ width: '100%', padding: '12px', backgroundColor: '#111', border: '1px solid #222', color: '#fff', borderRadius: '6px' }} 
          disabled
        />
      </div>

      <div style={{ marginBottom: '30px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: '#666' }}>Main Hero Text</label>
        <textarea 
          rows="4" 
          value={content.homeHeroTitle} 
          onChange={(e) => updateContent('homeHeroTitle', e.target.value)}
          style={{ width: '100%', padding: '12px', backgroundColor: '#111', border: '1px solid #222', color: '#fff', borderRadius: '6px', outline: 'none' }} 
        />
        <p style={{ fontSize: '12px', color: '#444', marginTop: '8px' }}>Changes are automatically reflected on the live site.</p>
      </div>

      <div style={{ display: 'flex', gap: '15px' }}>
        <button 
          onClick={() => {
            showNotification('Changes saved successfully!');
            setEditingPage(null);
          }}
          style={{ padding: '12px 24px', backgroundColor: '#ff4d4d', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}
        >
          Finish Editing
        </button>
      </div>
    </div>
  );

  const handleAddPage = () => {
    if (!newPageData.name || !newPageData.path) {
      showNotification('Please fill in all fields');
      return;
    }
    const newPage = {
      ...newPageData,
      date: 'Just now'
    };
    setPages([...pages, newPage]);
    setIsAddingPage(false);
    setNewPageData({ name: '', path: '' });
    showNotification('New page added successfully!');
  };

  const renderAddPageForm = () => (
    <div style={{
      backgroundColor: '#0a0a0a',
      borderRadius: '16px',
      border: '1px solid #1a1a1a',
      padding: '30px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
        <h3>Add New Page</h3>
        <button onClick={() => setIsAddingPage(false)} style={{ color: '#888', background: 'none', border: 'none', cursor: 'pointer' }}>✕ Close</button>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: '#666' }}>Page Name</label>
        <input 
          type="text" 
          placeholder="e.g. About Us"
          value={newPageData.name}
          onChange={(e) => setNewPageData({ ...newPageData, name: e.target.value })}
          style={{ width: '100%', padding: '12px', backgroundColor: '#111', border: '1px solid #222', color: '#fff', borderRadius: '6px', outline: 'none' }} 
        />
      </div>

      <div style={{ marginBottom: '30px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: '#666' }}>URL Path</label>
        <input 
          type="text" 
          placeholder="e.g. /about"
          value={newPageData.path}
          onChange={(e) => setNewPageData({ ...newPageData, path: e.target.value })}
          style={{ width: '100%', padding: '12px', backgroundColor: '#111', border: '1px solid #222', color: '#fff', borderRadius: '6px', outline: 'none' }} 
        />
      </div>

      <div style={{ display: 'flex', gap: '15px' }}>
        <button 
          onClick={handleAddPage}
          style={{ padding: '12px 24px', backgroundColor: '#ff4d4d', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}
        >
          Create Page
        </button>
        <button 
          onClick={() => setIsAddingPage(false)}
          style={{ padding: '12px 24px', backgroundColor: 'transparent', color: '#888', border: '1px solid #222', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}
        >
          Cancel
        </button>
      </div>
    </div>
  );

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#050505',
      color: '#fff',
      fontFamily: 'Inter, sans-serif'
    }}>
      {/* Sidebar */}
      <aside style={{
        width: '280px',
        backgroundColor: '#0a0a0a',
        borderRight: '1px solid #1a1a1a',
        display: 'flex',
        flexDirection: 'column',
        padding: '30px 20px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px', gap: '12px' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            backgroundColor: '#ff4d4d', 
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '20px'
          }}>⚡</div>
          <h1 style={{ fontSize: '20px', fontWeight: '700', letterSpacing: '-0.5px' }}>Admin Panel</h1>
        </div>

        <nav style={{ flex: 1 }}>
          {sections.map(section => (
            <div 
              key={section.id}
              onClick={() => {
                setActiveSection(section.id);
                setEditingPage(null);
                setIsAddingPage(false);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                marginBottom: '8px',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                backgroundColor: section.id === activeSection ? '#1a1a1a' : 'transparent',
                color: section.id === activeSection ? '#ff4d4d' : '#888'
              }}
            >
              <span>{section.icon}</span>
              <span style={{ fontWeight: '500' }}>{section.title}</span>
            </div>
          ))}
        </nav>

        <div style={{ 
          marginTop: 'auto', 
          padding: '20px', 
          backgroundColor: '#111', 
          borderRadius: '12px',
          border: '1px solid #1a1a1a'
        }}>
          <p style={{ fontSize: '13px', color: '#666', marginBottom: '4px' }}>Logged in as</p>
          <p style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px' }}>{user.email}</p>
          <button 
            onClick={() => {
              logout();
              navigate('/admin-login');
            }}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#1a1a1a',
              color: '#888',
              border: '1px solid #222',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '13px',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#fff';
              e.target.style.borderColor = '#333';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#888';
              e.target.style.borderColor = '#222';
            }}
          >
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '40px 60px', position: 'relative' }}>
        {notification && (
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '60px',
            padding: '12px 24px',
            backgroundColor: '#ff4d4d',
            color: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(255, 77, 77, 0.3)',
            zIndex: 100,
            animation: 'fadeIn 0.3s ease-out'
          }}>
            {notification}
          </div>
        )}

        <header style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '40px' 
        }}>
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px' }}>
              {sections.find(s => s.id === activeSection)?.title}
            </h2>
            <p style={{ color: '#666' }}>
              {activeSection === 'pages' ? 'Update content across your website in real-time.' : 'Monitor and manage your platform activities.'}
            </p>
          </div>
          {activeSection === 'pages' && !editingPage && !isAddingPage && (
            <button 
              onClick={() => setIsAddingPage(true)}
              style={{
                padding: '12px 24px',
                backgroundColor: '#ff4d4d',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(255, 77, 77, 0.2)'
              }}
            >
              + Add New Page
            </button>
          )}
        </header>

        {editingPage ? renderEditor() : isAddingPage ? renderAddPageForm() : (
          activeSection === 'pages' ? (
            <div style={{
              backgroundColor: '#0a0a0a',
              borderRadius: '16px',
              border: '1px solid #1a1a1a',
              overflow: 'hidden'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #1a1a1a' }}>
                    <th style={{ padding: '20px 24px', color: '#444', fontWeight: '600', fontSize: '13px', textTransform: 'uppercase' }}>Page Name</th>
                    <th style={{ padding: '20px 24px', color: '#444', fontWeight: '600', fontSize: '13px', textTransform: 'uppercase' }}>URL Path</th>
                    <th style={{ padding: '20px 24px', color: '#444', fontWeight: '600', fontSize: '13px', textTransform: 'uppercase' }}>Last Updated</th>
                    <th style={{ padding: '20px 24px', color: '#444', fontWeight: '600', fontSize: '13px', textTransform: 'uppercase', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pages.map((page, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid #111', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0d0d0d'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                      <td style={{ padding: '20px 24px', fontWeight: '500' }}>{page.name}</td>
                      <td style={{ padding: '20px 24px' }}><code style={{ color: '#666', backgroundColor: '#151515', padding: '4px 8px', borderRadius: '4px' }}>{page.path}</code></td>
                      <td style={{ padding: '20px 24px', color: '#666', fontSize: '14px' }}>{page.date}</td>
                      <td style={{ padding: '20px 24px', textAlign: 'right' }}>
                        <button 
                          onClick={() => setEditingPage(page)}
                          style={{ 
                            backgroundColor: 'transparent', 
                            color: '#ff4d4d', 
                            border: '1px solid #301010', 
                            padding: '8px 16px', 
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '13px',
                            fontWeight: '500',
                            transition: 'all 0.2s'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#200a0a';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                          }}>
                          Edit Page
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '100px', color: '#444' }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>🚧</div>
              <h3>{sections.find(s => s.id === activeSection)?.title} module is coming soon</h3>
              <p>We are currently building this administrative feature.</p>
            </div>
          )
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
