export const callBackendAPI = async (link, idToken, ...args) => {
    let requestHeaders = null;
    if (args.length === 4) {
        requestHeaders = {
            'usertoken': `Bearer ${idToken}`,
            'username': args[0] + ' ' + args[1],
            'useremail': args[2],
            'usertype': args[3]
        };
    }
    else {
        requestHeaders = { 'usertoken': `Bearer ${idToken}` };
    }

    const response = await fetch(link, {
        method: 'POST',
        headers: requestHeaders
    });

    if (response.status !== 200) {
        throw new Error('Failed to communicate with backend!');
    }

    const text = await response.text();
    return text;
}