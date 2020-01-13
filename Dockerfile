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

# GeckoDriver
RUN wget -q "https://github.com/mozilla/geckodriver/releases/download/v0.24.0/geckodriver-v0.24.0-linux64.tar.gz" -O /tmp/geckodriver.tgz \
    && tar zxf /tmp/geckodriver.tgz -C /usr/bin/ \
    && rm /tmp/geckodriver.tgz

# chromeDriver
RUN wget -q "https://chromedriver.storage.googleapis.com/79.0.3945.36/chromedriver_linux64.zip" -O /tmp/chromedriver.zip \
    && unzip /tmp/chromedriver.zip -d /usr/bin/ \
    && rm /tmp/chromedriver.zip

# Install latest version of Chromium
RUN echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list
RUN wget https://dl-ssl.google.com/linux/linux_signing_key.pub && apt-key add linux_signing_key.pub
RUN apt-get update && apt-get install -yq google-chrome-stable

# xvfb - X server display

ADD xvfb-chromium /usr/bin/xvfb-chromium
RUN mv /usr/bin/google-chrome /usr/bin/google-chrome-base \
    && ln -s /usr/bin/xvfb-chromium /usr/bin/google-chrome \
    && chmod 777 /usr/bin/xvfb-chromium

# create symlinks to chromedriver and geckodriver (to the PATH)
RUN ln -s /usr/bin/geckodriver /usr/bin/chromium-browser \
    && chmod 777 /usr/bin/geckodriver \
    && chmod 777 /usr/bin/chromium-browser

ENTRYPOINT ["/app/wait.sh"]
