# pushTransactionInery
Inery blockchain push transaction
A Sample code to call PUSH TRANSACTION on Inery Blockchain

<h3>Installation</h3>
1.Clone the repo

<pre class="notranslate"><code>git clone https://github.com/fenoloji/pushTransactionInery.git
</code></pre>

2.Change directory to cloned repo

<pre class="notranslate"><code>cd pushTransactionInery
</code></pre>

3. Run command:
<pre class="notranslate"><code>npm install
</code></pre>
4.Run command
<pre class="notranslate"><code>npm run build-web
</code></pre>

5. Run command
<pre class="notranslate"><code>nano env-sample
</code></pre>

6. Edit env-sample file with your information and saved
<pre>INERY_ACCOUNT="your_inery_account"
PRIVATE_KEY="your_private_key"
NODE_URL="http://your_node_url:8888"
RECIPIENT="recipient account name"</pre>

7. Rename env-sample .env
<pre class="notranslate"><code>mv env-sample .env
</code></pre>

8. Run command:
<pre class="notranslate"><code>node push-transaction.mjs
</code></pre>


