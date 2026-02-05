import PropTypes from 'prop-types';

const TEAL = '#3d9970';

const HelpModal = ({ isOpen, onClose, onCustomerSupport }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px',
    }}
    onClick={onClose}
    >
      <div style={{
        backgroundColor: '#fff',
        borderRadius: '20px',
        padding: '40px',
        maxWidth: '700px',
        width: '100%',
        maxHeight: '85vh',
        overflowY: 'auto',
        boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
      }}
      onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div style={{
          marginBottom: '30px',
          borderBottom: '1px solid #f0f0f0',
          paddingBottom: '20px',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '12px',
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              backgroundColor: TEAL,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#fff" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </div>
            <h3 style={{
              color: '#1a1a1a',
              fontSize: '28px',
              fontWeight: '700',
              margin: 0,
              flex: 1,
            }}>
              Need Help with ZetScore Login?
            </h3>
          </div>
          
          <p style={{
            color: '#666',
            fontSize: '16px',
            lineHeight: '1.6',
            margin: 0,
            paddingLeft: '64px',
          }}>
            Get assistance with accessing your organizations secure portal
          </p>
        </div>

        {/* How It Works Section */}
        <div style={{
          marginBottom: '30px',
        }}>
          <h4 style={{
            color: '#1a1a1a',
            fontSize: '20px',
            fontWeight: '600',
            margin: '0 0 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}>
            <span style={{
              display: 'inline-flex',
              width: '24px',
              height: '24px',
              backgroundColor: TEAL,
              color: '#fff',
              borderRadius: '50%',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: '600',
            }}>
              1
            </span>
            How It Works
          </h4>
          
          <div style={{
            backgroundColor: '#f8f9fa',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '16px',
          }}>
            <p style={{
              color: '#666',
              fontSize: '15px',
              lineHeight: '1.6',
              margin: '0 0 12px',
            }}>
              This secure portal allows you to access your organizations ZetScore account. Follow these simple steps:
            </p>
            
            <ol style={{
              color: '#666',
              fontSize: '15px',
              lineHeight: '1.6',
              margin: 0,
              paddingLeft: '20px',
            }}>
              <li style={{ marginBottom: '10px', paddingLeft: '8px' }}>
                <strong>Search</strong> - Type your organizations name in the search box above
              </li>
              <li style={{ marginBottom: '10px', paddingLeft: '8px' }}>
                <strong>Select</strong> - Choose your organization from the dropdown list
              </li>
              <li style={{ marginBottom: '10px', paddingLeft: '8px' }}>
                <strong>Continue</strong> - Click Continue to be redirected to your organizations secure login page
              </li>
              <li style={{ paddingLeft: '8px' }}>
                <strong>Login</strong> - Use your organization credentials to access your account
              </li>
            </ol>
          </div>
        </div>

        {/* Troubleshooting Section */}
        <div style={{
          marginBottom: '30px',
        }}>
          <h4 style={{
            color: '#1a1a1a',
            fontSize: '20px',
            fontWeight: '600',
            margin: '0 0 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}>
            <span style={{
              display: 'inline-flex',
              width: '24px',
              height: '24px',
              backgroundColor: TEAL,
              color: '#fff',
              borderRadius: '50%',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: '600',
            }}>
              2
            </span>
            Common Issues & Solutions
          </h4>
          
          <div style={{
            backgroundColor: '#f8f9fa',
            borderRadius: '12px',
            padding: '20px',
          }}>
            <div style={{ marginBottom: '16px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                marginBottom: '12px',
              }}>
                <div style={{
                  minWidth: '24px',
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#e8f4f1',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <span style={{ color: TEAL, fontSize: '12px', fontWeight: '600' }}>✓</span>
                </div>
                <div>
                  <strong style={{ color: '#1a1a1a', display: 'block', marginBottom: '4px' }}>
                    Organization Not Found
                  </strong>
                  <span style={{ color: '#666', fontSize: '14px' }}>
                    Ensure youre typing the exact name. If still not found, contact your organizations IT department.
                  </span>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                marginBottom: '12px',
              }}>
                <div style={{
                  minWidth: '24px',
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#e8f4f1',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <span style={{ color: TEAL, fontSize: '12px', fontWeight: '600' }}>✓</span>
                </div>
                <div>
                  <strong style={{ color: '#1a1a1a', display: 'block', marginBottom: '4px' }}>
                    Login Issues After Redirect
                  </strong>
                  <span style={{ color: '#666', fontSize: '14px' }}>
                    Use the credentials provided by your organization. Password issues should be reported to your IT support.
                  </span>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
              }}>
                <div style={{
                  minWidth: '24px',
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#e8f4f1',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <span style={{ color: TEAL, fontSize: '12px', fontWeight: '600' }}>✓</span>
                </div>
                <div>
                  <strong style={{ color: '#1a1a1a', display: 'block', marginBottom: '4px' }}>
                    Browser Compatibility
                  </strong>
                  <span style={{ color: '#666', fontSize: '14px' }}>
                    We recommend using Chrome, Firefox, or Safari. Clear cache if experiencing display issues.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '16px',
          borderTop: '1px solid #f0f0f0',
          paddingTop: '24px',
        }}>
          <button
            onClick={onClose}
            style={{
              backgroundColor: 'transparent',
              border: '1px solid #e0e0e0',
              color: '#666',
              padding: '12px 28px',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s',
              minWidth: '120px',
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
            Close
          </button>
          
          <button
            onClick={onCustomerSupport}
            style={{
              backgroundColor: TEAL,
              border: 'none',
              color: '#fff',
              padding: '12px 28px',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s',
              minWidth: '160px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.opacity = '0.9';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            Customer Support
          </button>
        </div>
      </div>
    </div>
  );
};

HelpModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onCustomerSupport: PropTypes.func.isRequired,
};

export default HelpModal;