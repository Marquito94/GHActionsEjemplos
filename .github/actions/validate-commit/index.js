const core = require('@actions/core');

try {
    const commitMessage = core.getInput('commit_message');
    const isValid = /^[A-Z].+/.test(commitMessage);
    
    if ( !isValid ) {
        core.setFailed( 'Fallo: El primer caracter debe tener mayuscula' );
    }
} catch (error) {
    core.setFailed('error al procesar el mensaje de commit: ${error.message}');
}