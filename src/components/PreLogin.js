import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import HelpModal from './HelpModal';

// Mock organization data
const ORGANIZATIONS = [
  { id: 1, name: 'Kenya Revenue Authority', model: 'enterprise', domain: 'kra.zetscore.com' },
  { id: 2, name: 'Equity Group Holding', model: 'enterprise', domain: 'equity.zetscore.com' },
  { id: 3, name: 'Cooperative Bank', model: 'enterprise', domain: 'coop.zetscore.com' },
  { id: 4, name: 'KCB Bank', model: 'enterprise', domain: 'kcb.zetscore.com' },
  { id: 5, name: 'Standard Chartered', model: 'enterprise', domain: 'sc.zetscore.com' },
];

const TEAL = '#3d9970';

const PreLoginPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrg, setSelectedOrg] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredOrgs = ORGANIZATIONS.filter(org =>
    org.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectOrg = (org) => {
    setSelectedOrg(org);
    setSearchTerm(org.name);
    setShowDropdown(false);
  };

  const handleContinue = () => {
    if (!selectedOrg) return;
    if (selectedOrg.model === 'business') {
      window.location.href = `https://${selectedOrg.domain}/login`;
    } else if (selectedOrg.model === 'enterprise') {
      window.location.href = `https://${selectedOrg.domain}/auth`;
    }
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleClearSelection = () => {
    setSelectedOrg(null);
    setSearchTerm('');
  };

  const handleCustomerSupport = () => {
    window.location.href = '/customer-support';
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#fafafa',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: '32px',
      paddingLeft: '24px',
      paddingRight: '24px',
      paddingBottom: '24px',
      fontFamily: "'Segoe UI', sans-serif",
    }}>

      {/* Logo above the card */}
      <img
        src="/ZetScore_Icon.png"
        alt="ZetScore Logo"
        style={{
          width: '92px',
          height: '92px',
          objectFit: 'contain',
          marginBottom: '24px',
        }}
      />

      {/* Main card */}
      <div style={{
        backgroundColor: '#fff',
        borderRadius: '16px',
        width: '50vw',
        minWidth: '420px',
        maxWidth: '760px',
        padding: '40px 44px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        border: '1px solid #e8e8e8',
      }}>

        {/* Main Title */}
        <h1 style={{
          color: '#1a1a1a',
          fontSize: '32px',
          fontWeight: '700',
          textAlign: 'center',
          margin: '0 0 8px',
          letterSpacing: '-0.5px',
        }}>
          Login with ZetScore Security
        </h1>

        {/* Secondary Title */}
        <h2 style={{
          color: '#666',
          fontSize: '18px',
          fontWeight: '400',
          textAlign: 'center',
          margin: '0 0 28px',
          lineHeight: '1.4',
        }}>
          Select your Organization
        </h2>

        {/* Search message */}
        <p style={{
          color: '#666',
          fontSize: '20px',
          margin: '0 0 28px',
          lineHeight: '1.5',
          textAlign: 'center',
        }}>
          Search your org to proceed to secure login
        </p>

        {/* Affiliations Title */}
        <div style={{
          marginBottom: '12px',
        }}>
          <h3 style={{
            color: '#1a1a1a',
            fontSize: '16px',
            fontWeight: '600',
            margin: '0 0 8px',
          }}>
            Affiliations
          </h3>
          <p style={{
            color: '#666',
            fontSize: '14px',
            margin: '0',
            lineHeight: '1.4',
          }}>
            Select your affiliated organization from the list below
          </p>
        </div>

        {/* Search + Dropdown wrapper */}
        <div ref={wrapperRef} style={{ position: 'relative', marginBottom: '14px' }}>

          {/* Input row - Shows selected organization inside the input */}
          <div style={{ position: 'relative' }}>
            {selectedOrg ? (
              <div style={{
                width: '100%',
                boxSizing: 'border-box',
                padding: '14px 16px 14px 42px',
                fontSize: '15px',
                color: '#1a1a1a',
                border: '1px solid #e0e0e0',
                borderRadius: '10px',
                outline: 'none',
                backgroundColor: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
              }}
              onClick={() => setShowDropdown(true)}>
                <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#999"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      position: 'absolute',
                      left: '14px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '20px',
                      height: '20px',
                    }}
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  
                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: TEAL,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '12px',
                    marginLeft: '10px',
                    flexShrink: 0,
                  }}>
                    <span style={{ fontSize: '14px', fontWeight: '700', color: '#fff' }}>
                      {selectedOrg.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '15px', fontWeight: '500', color: '#222' }}>
                      {selectedOrg.name}
                    </div>
                    <div style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>
                      {selectedOrg.domain}
                    </div>
                  </div>
                </div>
                
                {/* Clear selection button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClearSelection();
                  }}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#999',
                    cursor: 'pointer',
                    padding: '4px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#666'}
                  onMouseLeave={e => e.currentTarget.style.color = '#999'}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#999"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    position: 'absolute',
                    left: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '20px',
                    height: '20px',
                    pointerEvents: 'none',
                  }}
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowDropdown(true);
                    if (!e.target.value) {
                      setSelectedOrg(null);
                    }
                  }}
                  onFocus={() => setShowDropdown(true)}
                  placeholder="Search for your organization..."
                  style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    paddingLeft: '42px',
                    paddingRight: '16px',
                    paddingTop: '14px',
                    paddingBottom: '14px',
                    fontSize: '15px',
                    color: '#1a1a1a',
                    border: '1px solid #e0e0e0',
                    borderRadius: '10px',
                    outline: 'none',
                    backgroundColor: '#fff',
                  }}
                />
              </>
            )}
          </div>

          {/* Dropdown - shows when searching */}
          {showDropdown && (
            <div style={{
              position: 'absolute',
              top: 'calc(100% + 6px)',
              left: 0,
              right: 0,
              backgroundColor: '#fff',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
              border: '1px solid #e0e0e0',
              zIndex: 10,
              maxHeight: '260px',
              overflowY: 'auto',
            }}>
              {filteredOrgs.length > 0 ? (
                filteredOrgs.map((org, idx) => {
                  const isSelected = selectedOrg?.id === org.id;
                  return (
                    <div
                      key={org.id}
                      onClick={() => handleSelectOrg(org)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '13px 16px',
                        cursor: 'pointer',
                        backgroundColor: isSelected ? '#f5f5f5' : '#fff',
                        borderBottom: idx < filteredOrgs.length - 1 ? '1px solid #f0f0f0' : 'none',
                        transition: 'background-color 0.15s',
                      }}
                      onMouseEnter={e => { if (!isSelected) e.currentTarget.style.backgroundColor = '#fafafa'; }}
                      onMouseLeave={e => { e.currentTarget.style.backgroundColor = isSelected ? '#f5f5f5' : '#fff'; }}
                    >
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: TEAL,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '14px',
                        flexShrink: 0,
                      }}>
                        <span style={{ fontSize: '15px', fontWeight: '700', color: '#fff' }}>
                          {org.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <span style={{ fontSize: '15px', fontWeight: '500', color: '#222', display: 'block' }}>
                          {org.name}
                        </span>
                        <span style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>
                          {org.domain}
                        </span>
                      </div>
                      {isSelected && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" style={{ width: '22px', height: '22px', flexShrink: 0 }}>
                          <circle cx="11" cy="11" r="11" fill={TEAL} />
                          <path d="M6.5 11.5 L9.5 14.5 L15.5 8" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  );
                })
              ) : (
                <div style={{ padding: '18px', textAlign: 'center', color: '#999', fontSize: '14px' }}>
                  No organizations found
                </div>
              )}
            </div>
          )}
        </div>{/* end search + dropdown */}

        {/* Continue button */}
        <button
          onClick={handleContinue}
          disabled={!selectedOrg}
          style={{
            width: '100%',
            padding: '15px 0',
            border: 'none',
            borderRadius: '10px',
            backgroundColor: selectedOrg ? TEAL : '#e8e8e8',
            color: selectedOrg ? '#fff' : '#aaa',
            fontSize: '16px',
            fontWeight: '700',
            cursor: selectedOrg ? 'pointer' : 'not-allowed',
            transition: 'opacity 0.2s, margin-top 0.3s',
            marginTop: showDropdown ? '260px' : '14px',
            position: 'relative',
            zIndex: 1,
          }}
          onMouseEnter={e => { if (selectedOrg) e.currentTarget.style.opacity = '0.9'; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
        >
          Continue
        </button>

        {/* Bottom row: Home button and Help link */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '24px',
          paddingTop: '20px',
          borderTop: '1px solid #f0f0f0',
        }}>
          {/* Home button */}
          <button
            onClick={handleBackToHome}
            style={{
              backgroundColor: 'transparent',
              border: '1px solid #e0e0e0',
              color: '#666',
              padding: '10px 20px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#fafafa';
              e.currentTarget.style.borderColor = '#d0d0d0';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = '#e0e0e0';
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Home
          </button>

          {/* Help link */}
          <button
            onClick={() => setShowHelpModal(true)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#666',
              fontSize: '14px',
              cursor: 'pointer',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              padding: '8px 12px',
              borderRadius: '4px',
            }}
            onMouseEnter={e => { 
              e.currentTarget.style.color = '#1a1a1a';
              e.currentTarget.style.backgroundColor = '#f5f5f5';
            }}
            onMouseLeave={e => { 
              e.currentTarget.style.color = '#666';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            Do you need help?
          </button>
        </div>
      </div>
      <HelpModal 
        isOpen={showHelpModal}
        onClose={() => setShowHelpModal(false)}
        onCustomerSupport={handleCustomerSupport}
      />
    </div>
  );
};

export default PreLoginPage;