#Pull debian9.9 on Docker Hub
FROM debian:9.9 

# Install python 3.8
ENV LC_ALL C.UTF-8
ENV LANG C.UTF-8
ENV PATH /usr/local/bin:$PATH
ENV PYTHON_VERSION 3.8.0
ENV ALPHA_VERSION a1
ENV PYTHON_PIP_VERSION 19.0.2
ENV BUILD_DEPS build-essential \
    libncursesw5-dev \
    libreadline-gplv2-dev \
    libssl-dev \
    libgdbm-dev \
    libc6-dev \
    libsqlite3-dev \
    libbz2-dev \
    ca-certificates \
    zlib1g-dev \
    wget \
    libffi-dev
ENV REMOVE_DEPS build-essential \
    wget

RUN apt update && apt install --no-install-recommends --no-install-suggests -y ${BUILD_DEPS} \
    && wget -O- https://www.python.org/ftp/python/3.8.0/Python-3.8.0a1.tgz | tar xz \
    && cd Python-${PYTHON_VERSION}${ALPHA_VERSION}/ \
    && ./configure \
        --without-ensurepip \
        --enable-loadable-sqlite-extensions \
    && make -j "$(nproc)" \
    && make install \
    && find /usr/local -depth \
    \( \
        \( -type d -a \( -name test -o -name tests \) \) \
        -o \
        \( -type f -a \( -name '*.pyc' -o -name '*.pyo' \) \) \
    \) -exec rm -rf '{}' + \
    && rm -rf /Python-${PYTHON_VERSION}${ALPHA_VERSION} \
    \
    && python3 --version \
    \
    && cd /usr/local/bin \
    && ln -s pydoc3 pydoc \
    && ln -s python3 python \
    && cd \
    \
    set -ex; \
        \
        wget -O get-pip.py 'https://bootstrap.pypa.io/get-pip.py'; \
        \
        python get-pip.py \
            --disable-pip-version-check \
            --cache-dir=/pipcache \
            "pip==$PYTHON_PIP_VERSION" \
        ; \
        pip --version; \
        \
        find /usr/local -depth \
            \( \
                \( -type d -a \( -name test -o -name tests \) \) \
                -o \
                \( -type f -a \( -name '*.pyc' -o -name '*.pyo' \) \) \
            \) -exec rm -rf '{}' +; \
    rm -f get-pip.py \
    && rm -rf /pipcache \
    && apt remove --autoremove --purge -y ${REMOVE_DEPS} \
    && rm -rf /var/lib/apt/lists/*

RUN pip install --upgrade pip
RUN apt-get update -y

# Copy script and crontab
WORKDIR /usr/src/devops-project-prod
COPY . .

RUN pip install -r /usr/src/devops-project-prod/requirements.txt

ENTRYPOINT ["/usr/local/bin/python3","/usr/src/devops-project-prod/connector.py","3000"]
CMD tail -f /dev/null