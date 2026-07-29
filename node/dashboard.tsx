import React from 'react';                                                                                          
                                                                                                                    
const Dashboard: React.FC = () => {
  const now = Temporal.Now.zonedDateTimeISO().toString();
                                                                                  
  return (                                                                                                          
    <div style={{ backgroundColor: 'white', display: 'flex', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>                      
      <div style={{ color: 'black' }}>hello, world {now}</div>                                                            
    </div>                                                                                                          
  );                                                                                                                
};                                                                                                                  
                                                                                                                    
export default Dashboard;  