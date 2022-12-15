import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Login =  () => {
    let navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isError, setIsError] = useState(false)
    const isLoggedIn = localStorage.getItem('__c_mileapp_name')

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/")
        }
    }, [isLoggedIn])

    const staticAuth = {
        username: 'admin',
        password: 'mileapp'
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        if (username === staticAuth.username 
            && password === staticAuth.password
        ) {
            await localStorage.setItem('__c_mileapp_name', username)
            navigate("/")
        } else {
            setIsError(true)
        }
    }

    return (
    <div style={{
        overflow: 'hidden',
        background: '#fff',
        position: 'relative',
        height: '100vh',
    }}>
        <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                height: '30px',
                color: 'white',
                backgroundColor: 'gray'
        }}>
            <span style={{ marginRight: '16px'}}>Call Us Now: +62 812-1133-5608</span>
        </div>

        <div 
            style={{ 
                backgroundImage: "url('https://taskdev.mile.app/d09f7f2de7d88fb5f1575273b8a26426.png'), linear-gradient(180deg,rgba(2,168,243,.06),rgba(2,168,243,0))",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '100%',
                height: '90%',
            }}
        >
            <div 
                style={{
                    padding: '3em 0 1em', 
                    margin: '0 auto', 
                    maxWidth: '1280px',
                }}
            >
                <div style={{display: 'flex', marginTop: '3em'}}>
                    <div style={{ width: '33.33%'}}>
                        <a href={`/`} style={{textAlign: 'center', display: 'block'}}>
                            <img src="https://taskdev.mile.app/091546cdda82176f8a94f6119d042cc3.png" 
                                style={{
                                    height: 'auto',
                                    width: '8em',
                                    maxWidth: '200px'
                                }}
                                alt="background"
                            />
                        </a>
                        <div 
                            style={{
                                position: 'relative',
                                margin: '1em auto 0',
                                padding: '1em',
                                border: '1px solid #eee',
                                borderRadius: '5px',
                                textAlign: 'center'
                            }}
                        >
                            <h1 style={{color: '#02a8f3'}}>Login</h1>

                            <form onSubmit={handleLogin}>
                                <div style={{
                                    marginBottom: '10px',
                                    width: '80%',
                                    marginRight: 'auto',
                                    marginLeft: 'auto'
                                }}>
                                    <label style={{
                                        display: "flex",
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        lineHeight: '30px',
                                    }}>
                                        Username
                                    </label>
                                    <input type="text" 
                                        style={{
                                            width: '100%',
                                            backgroundColor: '#f5f7fa',
                                            borderColor: '#e4e7ed',
                                            color: '#c0c4cc',
                                            fontSize: '16px',
                                            fontWeight: '600',
                                            borderRadius: '4px',
                                            border: '1px solid #dcdfe6',
                                            boxSizing: 'border-box',
                                            height: '40px',
                                            lineHeight: '40px',
                                            outline: '0',
                                            padding: '0 15px',
                                            transition: 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                                        }}  
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div style={{
                                    marginBottom: '10px',
                                    width: '80%',
                                    marginRight: 'auto',
                                    marginLeft: 'auto'
                                }}>
                                    <label style={{
                                        display: "flex",
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        lineHeight: '30px',
                                    }}>
                                        Password
                                    </label>
                                    <input type="password" 
                                        style={{
                                            width: '100%',
                                            backgroundColor: '#f5f7fa',
                                            borderColor: '#e4e7ed',
                                            color: '#c0c4cc',
                                            fontSize: '16px',
                                            fontWeight: '600',
                                            borderRadius: '4px',
                                            border: '1px solid #dcdfe6',
                                            boxSizing: 'border-box',
                                            height: '40px',
                                            lineHeight: '40px',
                                            outline: '0',
                                            padding: '0 15px',
                                            transition: 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                                        }}
                                        onChange={(e) => setPassword(e.target.value)} 
                                    />
                                </div>
                                {
                                    isError &&

                                    <div style={{
                                        marginBottom: '10px',
                                        width: '80%',
                                        marginRight: 'auto',
                                        marginLeft: 'auto'
                                    }}>
                                        <span style={{color: 'red'}}>
                                            Username and password didnt match
                                        </span>
                                    </div>
                                }

                                <div>
                                    <button 
                                        style={{
                                            margin: '1rem 0 0',
                                            minWidth: '130px',
                                            color: '#fff',
                                            backgroundColor: '#409eff',
                                            borderColor: '#409eff',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            lineHeight: '1',
                                            whiteSpace: 'nowrap',
                                            padding: '12px 20px',
                                            border: '1px solid #dcdfe6',
                                            borderRadius: '4px'
                                        }}
                                        type="submit"
                                    >
                                    Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div style={{
                        width: '50%'
                    }}>
                        <div style={{position: 'relative'}}>
                            <img 
                                style={{
                                    position: 'absolute',
                                    top: '-3em', 
                                    maxWidth: '1000px',
                                    width: '110%'
                                }} 
                                src={`https://taskdev.mile.app/3336d2534f6e8d92022f2277d139a1b7.png`}
                                alt="Background"
                            /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login;
