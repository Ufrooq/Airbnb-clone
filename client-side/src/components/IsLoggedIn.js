const IsLoggedIn = async () => {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_BASE_URL}/users`,
            {
                method: "GET",
                credentials: "include",
                withCredentials: true,
            }
        );
        return response.ok;
    } catch (error) {
        console.error(error);
    }
};

export default IsLoggedIn;