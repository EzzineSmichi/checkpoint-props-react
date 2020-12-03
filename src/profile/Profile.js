import PropTypes from "prop-types";

function Profile({fullName = 'Ezzine Smichi', handleName, image, profession = 'Web developer', bio}) {

    

    return (
        <div>

            <img src = {image} alt = 'my profile' style = {{height: '30vmin'}} />

            <h1 style = {{fontWeight:'700', fontStyle:'italic',
             fontSize:'1.7rem', color:'rgb(11, 8, 238)'}}> { fullName } </h1>

            <h2 style = {{fontWeight: '400',fontSize: '1.2rem',
            color: 'rgb(40, 137, 194)'}}> { profession } </h2>

            <a href={bio} title='consult CV' style = {{color: 'rgb(49, 184, 184)',
             textDecorationColor: 'rgb(232, 5, 240)'}}> My CV </a><br/>

            <button onClick = {()=>handleName(fullName)} style = {{backgroundColor : 'rgb(11, 8, 238)', color : '#fff', fontSize : '1.2rem', marginTop : '2rem'}}>show my name</button>
            
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