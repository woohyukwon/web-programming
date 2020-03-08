FROM node:10.16.0-stretch

# Install required dependencies
RUN apt-get update && apt-get install -yq \
    default-jdk \
    firefox-esr \
    git-core \
    libgconf2-4 \
    libncurses5 \
    libxml2-dev \
    libxslt-dev \
    libz-dev \
    mongodb-clients \
    python-pytest \
    unzip \
    xclip \
    xsel \
    xvfb

# Update NPM and yarn to latest versions
RUN npm i npm@latest yarn@latest -g

# Install Heroku CLI
RUN npm install -g heroku

# Install Gulp Build Tool
RUN npm install -g gulp

COPY scripts/wait.sh /app/wait.sh

ENTRYPOINT ["/app/wait.sh"]
