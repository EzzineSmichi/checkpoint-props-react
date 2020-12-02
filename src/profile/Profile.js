import PropTypes from "prop-types";

function Profile({fullName = 'Ezzine Smichi', handleName, image, profession = 'Web developer', bio}) {

    handleName(fullName);

    return (
        <div>

            <img src = {image} alt = 'my profile' style = {{height: '30vmin'}} />

            <h1 style = {{fontWeight:'700', fontStyle:'italic',
             fontSize:'1.7rem', color:'rgb(11, 8, 238)'}}> { fullName } </h1>

            <h2 style = {{fontWeight: '400',fontSize: '1.2rem',
            color: 'rgb(40, 137, 194)'}}> { profession } </h2>

            <a href={bio} title='consult CV' style = {{color: 'rgb(49, 184, 184)',
             textDecorationColor: 'rgb(232, 5, 240)'}}> My CV </a>
            
        </div>
    );
}

Profile.propTypes = {
    fullName: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func,
    image: PropTypes.string,
    bio: PropTypes.string
  };

export default Profile;