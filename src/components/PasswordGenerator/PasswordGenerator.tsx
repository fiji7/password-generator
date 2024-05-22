import { useState } from 'react';
import { TbCopy } from "react-icons/tb";
import { generatePassword } from '../../helpers/generatePassword';
import Snackbar from '../SnackBar/SnackBar';
import './PasswordGenerator.scss';


function PasswordGenerator() {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(10);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeUppercase, setIncludeUppercase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [error, setError] = useState(false);
    const [showSnackbar, setShowSnackbar] = useState(false);


    const onSubmit = () => {
        if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols) {
            setError(true)
        } else {
            setError(false)
            setPassword(generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols));
        }
    };

    const copyPassword = () => {
        navigator.clipboard.writeText(password);
        setShowSnackbar(true);
    };

    const closeSnackbar = () => {
        setShowSnackbar(false);
    };

    return (
        <div className="password-generator">
            <div className="input-group">
                <div className="password-input-container">
                    <input type="text" id="password" value={password} readOnly />
                    <TbCopy className="copy-icon" onClick={copyPassword} />
                </div>
            </div>
            <div className="input-group">
                <label htmlFor="length">Character length {length}</label>
                <input
                    type="range"
                    id="length"
                    min="6"
                    max="20"
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value))}
                />
            </div>
            <div className="input-group">
                <input
                    type="checkbox"
                    id="lowercase"
                    checked={includeLowercase}
                    onChange={(e) => setIncludeLowercase(e.target.checked)}
                />
                <label htmlFor="lowercase">Include Lowercase</label>
            </div>
            <div className="input-group">
                <input
                    type="checkbox"
                    id="uppercase"
                    checked={includeUppercase}
                    onChange={(e) => setIncludeUppercase(e.target.checked)}
                />
                <label htmlFor="uppercase">Include Uppercase</label>
            </div>
            <div className="input-group">
                <input
                    type="checkbox"
                    id="numbers"
                    checked={includeNumbers}
                    onChange={(e) => setIncludeNumbers(e.target.checked)}
                />
                <label htmlFor="numbers">Include Numbers</label>
            </div>
            <div className="input-group">
                <input
                    type="checkbox"
                    id="symbols"
                    checked={includeSymbols}
                    onChange={(e) => setIncludeSymbols(e.target.checked)}
                />
                <label htmlFor="symbols">Include Symbols</label>
            </div>
            <button className="generate-button" onClick={onSubmit}>
                Generate
            </button>
            {error && <p className='error-message'>At least one option must be selected</p>}
            <Snackbar message={'Password copied to clipboard'} show={showSnackbar} onClose={closeSnackbar} />
        </div>
    );
}

export default PasswordGenerator;
