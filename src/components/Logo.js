import { WEBSITE_URL }  from '../constants';

function Logo () {
    return (
        <div className="App-logo">
            <a href={WEBSITE_URL} target="_blank">
                <img src="/favicon-32x32.png" alt="notion widget clock studiorach logo" width="32" />
            </a>
        </div>
    )
}

export default Logo;